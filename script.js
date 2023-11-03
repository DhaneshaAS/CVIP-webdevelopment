function runCode() {
    const htmlCode = document.getElementById("html-editor").textContent;
    const cssCode = `<style>${document.getElementById("css-editor").textContent}</style>`;
    const jsCode = `<script>${document.getElementById("js-editor").textContent}</script>`;

    const outputFrame = document.getElementById("output").contentWindow.document;
    outputFrame.open();
    outputFrame.write(htmlCode + cssCode + jsCode);
    outputFrame.close();
}
