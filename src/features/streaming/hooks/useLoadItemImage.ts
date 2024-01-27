import { Item } from '@/types';

import { useSupabaseClient } from '@supabase/auth-helpers-react';

export const useLoadItemImage = (item: Item) => {
  const supabaseClient = useSupabaseClient();

  if (!item) {
    return null;
  }

  const { data: imageData } = supabaseClient.storage.from('images').getPublicUrl(item.image_path);

  return imageData.publicUrl;
};
