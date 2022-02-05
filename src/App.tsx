import React, { useRef } from "react";
import EmailEditor from "react-email-editor";
import "./App.css";

function App() {
  const emailEditorRef = useRef<any>(null);

  const onLoad = () => {
    // editor instance is created
    // you can load your template here;
    // const templateJson = {};
    // emailEditorRef.current.editor.loadDesign(templateJson);
  };

  const onReady = () => {
    // editor is ready
    console.log("onReady");
  };

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data: any) => {
      const { design, html } = data;
      console.log("exportHtml", html);
      console.log("exportHtml", design);
    });
  };

  return (
    <div>
      <div className="nav">
        <button onClick={() => exportHtml()}>Export HTML</button>
      </div>
      <EmailEditor
        onLoad={onLoad}
        ref={emailEditorRef}
        tools={{
          social: {
            enabled: true,
          },
        }}
        options={{
          features: {
            imageEditor: true,
          },
          user: {
            id: 121212,
            name: "Tioluwani Kolawole",
            email: "tioluwani@simpu.co",
          },
          mergeTags: [
            {
              name: "Profile",
              mergeTags: [{ name: "First name", value: "{{first_name}}" }],
            },
          ],
        }}
        appearance={{
          theme: "dark",
          panels: {
            tools: {
              dock: "left",
            },
          },
        }}
        projectId={62492}
        style={{ height: "100vh" }}
      />
    </div>
  );
}

export default App;
