/**
 * Cloudinary image optimization utility.
 * Applies responsive dimensions, automatic WebP/AVIF format selection (when not already WebP),
 * and automatic quality compression to maximize mobile PageSpeed performance.
 */

export function getOptimizedCloudinaryUrl(
  url: string,
  options?: { width?: number; quality?: string; format?: string }
): string {
  if (!url || typeof url !== 'string' || !url.includes('res.cloudinary.com') || !url.includes('/image/upload/')) {
    return url;
  }

  const parts = url.split('/image/upload/');
  if (parts.length !== 2) return url;

  const prefix = parts[0] + '/image/upload/';
  let suffix = parts[1];

  // If suffix already starts with a transformation segment like "f_auto,q_auto.../v12345/...", strip it to reapply cleanly
  const existingTransformMatch = suffix.match(/^([a-z0-9_,:]+)\/(v[0-9]+.*)$/);
  if (existingTransformMatch) {
    suffix = existingTransformMatch[2];
  }

  const isWebp = url.toLowerCase().endsWith('.webp');
  const transforms: string[] = [];

  // If already .webp, keep format; otherwise apply automatic modern format (AVIF/WebP)
  if (!isWebp) {
    transforms.push(options?.format ? `f_${options.format}` : 'f_auto');
  }

  transforms.push(options?.quality ? `q_${options.quality}` : 'q_auto');

  if (options?.width) {
    transforms.push(`w_${options.width}`);
    // c_limit guarantees we never upscale smaller assets
    transforms.push('c_limit');
  }

  return `${prefix}${transforms.join(',')}/${suffix}`;
}

export function getCloudinarySrcSet(
  url: string,
  widths: number[] = [360, 480, 720, 1080]
): string {
  if (!url || typeof url !== 'string' || !url.includes('res.cloudinary.com') || !url.includes('/image/upload/')) {
    return '';
  }

  return widths
    .map((w) => `${getOptimizedCloudinaryUrl(url, { width: w })} ${w}w`)
    .join(', ');
}
