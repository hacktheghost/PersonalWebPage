export function slugifyProjectName(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\w\s-]/g, '') // remove punctuation
    .trim()
    .replace(/\s+/g, '-') // spaces to dashes
    .replace(/-+/g, '-');
}


