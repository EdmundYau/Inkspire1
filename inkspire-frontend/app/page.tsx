// ./app/page.tsx
import ClientComponent from "@/components/ClientComponent";
// import ClientTextEditor from "@/components/ClientTextEditor";
import { fetchAccessToken } from "@humeai/voice";
import dynamic from 'next/dynamic';
import './StylesApp/pageapp.css';  // Adjust path based on your directory structure

const ClientTextEditor = dynamic(() => import('@/components/ClientTextEditor'), {
  ssr: false
});


export default async function Page() {
  const accessToken = await fetchAccessToken({
    apiKey: String(process.env.HUME_API_KEY),
    secretKey: String(process.env.HUME_SECRET_KEY),
  });

  if (!accessToken) {
    throw new Error();
  }


  return(
  <>
    <div>
      <h1>Inkspire</h1>
        <div className="container">
          <div className="editorContainer">
            <ClientTextEditor/>
          </div>
          <div className="componentContainer">
            <ClientComponent accessToken={accessToken} />
          </div>
        </div>
    </div>
  </>
  );
}
