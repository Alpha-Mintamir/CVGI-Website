// Base path for GitHub Pages deployment
// In production, this will be "/CVGI-Website", in development it will be ""
export const basePath = process.env.NODE_ENV === "production" ? "/CVGI-Website" : "";

// Helper function to prefix asset paths
export function getAssetPath(path: string): string {
  // If path already starts with http or https, return as is
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  
  // Remove leading ./ if present
  if (path.startsWith("./")) {
    path = "/" + path.slice(2);
  }
  
  // Ensure path starts with /
  if (!path.startsWith("/")) {
    path = "/" + path;
  }
  
  return basePath + path;
}

