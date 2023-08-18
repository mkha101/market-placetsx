import { createClient } from "@supabase/supabase-js";

export const supabaseClient = async (supabaseToken: any) => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? "DEFAULT_SUPABASE_URL",
    process.env.NEXT_PUBLIC_SUPABASE_KEY ?? "DEFAULT_SUPABASE_KEY",
    {
      global: { headers: { Authorization: `Bearer ${supabaseToken}` } },
    }
  );

  return supabase;
};

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

export const postListing = async ({
  userId,
  token,
  listings,
}: {
  userId: string;
  token: string | null;
  listings: any;
}) => {
  const { title, description, category, price, imageFile } = listings;

  const supabase = await supabaseClient(token);

  // Upload the image to Supabase Storage
  if (imageFile) {
    const storageResponse = await supabase.storage
      .from("Images")
      .upload(`${imageFile.name}`, imageFile);

    if (storageResponse.error) {
      console.error("Error uploading image:", storageResponse.error.message);
      return null;
    }

    const { data, error } = await supabase
      .from("Listings")
      .insert({
        user_id: userId,
        title,
        description,
        category,
        price,
      })
      .select();

    if (error) {
      console.error("Error posting listing:", error.message);
      return null;
    }

    return data;
  }
};
