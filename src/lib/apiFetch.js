const apiUrl = import.meta.env.VITE_API_URL

export const apiFetch = async (url, options = {}) => {
  const token = localStorage.getItem('adminToken')

  const res = await fetch(`${apiUrl}${url}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
      ...options.headers,
    },
  })

  if (res.status === 401 || res.status === 403) {
    localStorage.removeItem('adminToken')
    window.location.href = '/admin/login'
    return
  }

  return res
}
