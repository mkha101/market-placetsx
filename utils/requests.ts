import { supabaseClient } from "./supaBaseClient";

// Function to fetch Listings from Supabase
export const getListings = async ({
  userId,
  token,
}: {
  userId: string;
  token: string | null;
}) => {
  const supabase = await supabaseClient(token);
  const { data: todos, error } = await supabase
    .from("Listings")
    .select("*")
    .eq("user_id", userId);

  if (error) {
    console.error("Error fetching Listings:", error.message);
    return [];
  }

  return todos;
};

export const postListing = async ({
  userId,
  token,
  e,
}: {
  userId: string;
  token: string | null;
  e: React.FormEvent<HTMLFormElement>;
}) => {
  const formData = new FormData(e.currentTarget); // Pass the currentTarget (form element) to FormData

  e.preventDefault(); // Make sure to prevent the form submission since you're handling it manually

  const supabase = await supabaseClient(token);
  const { data, error } = await supabase
    .from("Listing")
    .insert({
      user_id: userId,
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      category: formData.get("category") as string,
      price: formData.get("price") as string,
    })
    .select();

  if (error) {
    console.error("Error posting listing:", error.message);
    return null;
  }

  return data;
};
