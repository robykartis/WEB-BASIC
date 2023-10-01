// Get Posts data
async function getDataCategory() {
  try {
    const api = process.env.BACKEND_URL;
    const res = await fetch(`${api}/api/categories`, {
      cache: 'force-cache',
    });

    if (!res.ok) {
      throw new Error('Gagal mengambil data kategori');
    }

    const category = await res.json();
    return category.data;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data:', error);
    throw error; // Melempar kembali kesalahan untuk penanganan lebih lanjut jika diperlukan
  }
}

export default getDataCategory;



