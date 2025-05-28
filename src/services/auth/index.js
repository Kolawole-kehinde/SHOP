import { supabase } from "../../lib/supabaseClient";

// SIGN UP
export const signUpApi = async (payload) => {
  const { email, name, password } = payload;

  if (!name) throw new Error("Name is required");

  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (signUpError) throw new Error(signUpError.message);

  const user = signUpData?.user;

  if (!user) throw new Error("User not found after sign up");

  console.log("Inserting user:", { user_id: user.id, name, email });

  const { data: userData, error: insertError } = await supabase
    .from("users")
    .insert([{ user_id: user.id, name, email }])
    .select("*")
    .single();

  if (insertError) throw new Error(insertError.message);

  return userData;
};


// SIGN IN
export const signInApi = async (payload) => {
  const { email, password } = payload;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  const user = data?.user;

  if (!user) throw new Error("User not found after login.");

  // Fetch user info from 'users' table
  const { data: userData, error: userError } = await supabase
    .from("users")
    .select()
    .eq("user_id", user.id)
    .single();

  if (userError) throw new Error(userError.message);

  return userData;
};
