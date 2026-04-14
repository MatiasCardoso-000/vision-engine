import ImageDisplay from "./components/ImageDisplay";
import PromptForm from "./components/PromptForm";
import useImageGeneration from "./hooks/useImageGeneration";

function App() {
  const { generateImage, imageUrl, isLoading, error } = useImageGeneration();

  return (
    <div className="app">
      <aside className="app-sidebar">
        <div className="app-brand">
          <span className="app-label">AI · IMAGE · GENERATION</span>
          <h1 className="app-title">
            VISION
            <br />
            ENGINE
          </h1>
          <p className="app-description">
            Describe tu imagen con detalle. Cuanto más específico, mejor el resultado.
          </p>
        </div>

        <div className="app-controls">
          <PromptForm onSubmit={generateImage} isLoading={isLoading} />
        </div>

        <footer className="app-footer">
          <span className="app-label">POWERED BY AI · {new Date().getFullYear()}</span>
        </footer>
      </aside>

      <main className="app-canvas">
        <div className="comic-burst" aria-hidden="true">
          <span>POW!</span>
        </div>
        <ImageDisplay imageUrl={imageUrl} isLoading={isLoading} error={error} />
      </main>
    </div>
  );
}

export default App;
