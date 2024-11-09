import { supabaseClient } from "./supaBaseClient";

// Function to fetch user Listings from Supabase
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

//Function to get listing data based on post ID for product page
export const getProduct = async ({
  listingId,
  token,
}: {
  listingId: string;
  token: string | null;
}) => {
  const supabase = await supabaseClient(token);

  const { data: listings, error } = await supabase
    .from("Listings")
    .select("*")
    .eq("id", listingId);

  if (error) {
    console.error("Error fetching Listings:", error.message);
    return [];
  }

  return listings;
};

//Function to search for products
export const searchListings = async ({
  token,
  query,
  category,
}: {
  token?: string | null;
  query: string;
  category?: string | null;
}) => {
  const supabase = await supabaseClient(token);
  const { data: listings, error } = await supabase
    .from("Listings")
    .select()
    .eq("category", category)
    .textSearch("title", query);

  if (error) {
    console.error("Error fetching Listings:", error.message);
    return []; // Return null instead of an empty array
  }

  return listings;
};

//Function to fetch all listings
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

//Function to post listings

export const postListing = async ({
  userId,
  token,
  listings,
}: {
  userId: string;
  token: string | null;
  listings: any;
}) => {
  const {
    title,
    description,
    category,
    condition,
    price,
    image_url,
    email_address,
  } = listings;

  const supabase = await supabaseClient(token);
  const { data, error } = await supabase
    .from("Listings")
    .insert({
      user_id: userId,
      title,
      description,
      category,
      condition,
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
