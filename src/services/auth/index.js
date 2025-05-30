import { supabase } from "../../lib/supabaseClient";

// SIGN UP
export const signUpApi = async (payload) => {
  const { email, name, password } = payload;

  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (signUpError) throw new Error(signUpError.message);

  const user = signUpData?.user;

  if (!user) throw new Error("User not found after sign up");

  // Insert user info into 'users' table
  const { data: userData, error: insertError } = await supabase
    .from("users")
    .insert([
      {
        user_id: user.id,
        name,
        email
      },
    ])
    .select("*")
    .single();

  if (insertError) throw new Error(insertError.message);

  return userData;
};

// SIGN IN

export const signInApi = async ({ email, password }) => {
  console.log("Calling Supabase sign-in...");

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Supabase auth error:", error.message);
    throw new Error(error.message);
  }

  const user = data?.user;
  if (!user) {
    throw new Error("User not found after login.");
  }

  const { data: userData, error: userError } = await supabase
    .from("users")
    .select("*")
    .eq("user_id", user.id)
    .single();

  if (userError) {
    console.error("Fetching user data failed:", userError.message);
    throw new Error(userError.message);
  }

  console.log("Fetched user data:", userData);
  return userData;
};

