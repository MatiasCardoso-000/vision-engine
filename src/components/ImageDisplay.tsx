export default function ImageDisplay({
  imageUrl,
  isLoading,
  error,
}: {
  imageUrl: string | null;
  isLoading: boolean;
  error: string | null;
}) {
  return (
    <div className="image-container">
      <div className={`image-frame ${imageUrl ? "has-image" : ""}`}>
        {isLoading && (
          <div className="image-loading">
            <div className="image-loading-shimmer" />
            <span className="image-loading-label">LOADING...</span>
          </div>
        )}

        {!isLoading && imageUrl && (
          <img className="image-result" src={imageUrl} alt="Generated image" />
        )}

        {!isLoading && !imageUrl && (
          <div className="image-empty-state">
            <div className="image-empty-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-5-5L5 21" />
              </svg>
            </div>
            <span className="image-empty-text">Awaiting signal</span>
          </div>
        )}

        {error && (
          <div className="image-error">
            <span className="image-error-dot">BOOM!</span>
            <span className="image-error-text">Error — image generation failed</span>
          </div>
        )}
      </div>
    </div>
  );
}
