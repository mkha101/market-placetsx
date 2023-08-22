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
  const { data: listings, error } = await supabase
    .from("Listings")
    .select("*")
    .eq("user_id", userId);

  if (error) {
    console.error("Error fetching Listings:", error.message);
    return [];
  }

  return listings;
};

export const getAllListings = async ({
  token,
}: { token?: string | null } = {}) => {
  const supabase = await supabaseClient(token);

  const { data: listings, error } = await supabase.from("Listings").select("*");

  if (error) {
    console.error("Error fetching allListings:", error.message);
    return [];
  }

  return listings;
};

export const postListing = async ({
  userId,
  token,
  listings,
}: {
  userId: string;
  token: string | null;
  listings: any;
}) => {
  const { title, description, category, price, image_url, email_address } =
    listings;

  const supabase = await supabaseClient(token);
  const { data, error } = await supabase
    .from("Listings")
    .insert({
      user_id: userId,
      title,
      description,
      category,
      price,
      image_url,
      email_address,
    })
    .select();

  if (error) {
    console.error("Error posting listing:", error.message);
    return null;
  }

  return data;
};
