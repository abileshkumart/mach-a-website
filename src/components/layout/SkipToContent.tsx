export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:z-[9999] focus:top-4 focus:left-4 focus:bg-[#FF7400] focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-medium"
    >
      Skip to main content
    </a>
  );
}
