/**
 * 服務清單（依 order 排序），首頁、服務列表、頁尾與聯絡表單共用。
 * 只取列表需要的欄位，避免把 Markdown 內文帶進每一頁的 payload。
 */
export function useServices() {
  return useAsyncData('services-list', () =>
    queryCollection('services')
      .order('order', 'ASC')
      .select('title', 'path', 'shortDescription', 'icon', 'tags')
      .all(),
  )
}
