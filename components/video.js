export function Video({ src }) {
  return (
    <iframe
      className="w-full h-full"
      src={`https://www.youtube.com/embed/${src}`}
      title="Music Video"
      loading="lazy"
      aria-hidden="true"
    />
  );
}
