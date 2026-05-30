export const ENV = {
  API_URL: process.env.NEXT_PUBLIC_API_BASE_URL!,
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL!,
};

export async function fetcher<T>(url: string): Promise<T> {
  const fullUrl = `${ENV.API_URL}${url}`;

  const res = await fetch(fullUrl);

  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();

  return data;
}

export function getImageUrl(path: string) {
  return `${ENV.SITE_URL}${path}`;
}
