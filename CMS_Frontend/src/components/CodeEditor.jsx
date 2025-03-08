import React, { useRef, useEffect } from 'react'
import { Editor, loader } from '@monaco-editor/react'
import ButtonComponent from './ButtonComponent';

const CodeEditor = () => {
   
  const editorRef = useRef(null);

  const content = `# Welcome to the Python editor! 
Modify the code and run it.

def greet(name): 
    """Returns a greeting message.""" 
    retur f"Hello, {name}! Welcome to our website."

# Example usage: 
user_name = "Alice"print(greet(user_name))  
# Try changing 'Alice' to your own name! `;

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() { 
    console.log(editorRef.current.getValue()); 
  }

  useEffect(() => {
    loader.init().then(monacoInstance => {
      monacoInstance.editor.defineTheme('myCustomTheme', {
        base: 'vs-dark', // can also be 'vs' or 'hc-black'
        inherit: true, // can also be false to completely replace the base theme
        rules: [
          { background: '3B3B3B' },
          { token: '', foreground: 'E1E1DD' },
        ],
        colors: {
          'editor.background': '#3B3B3B',
          'editor.foreground': '#E1E1DD',
        }
      });
    });
  }, []);

  const paragraphText = `Variables are containers for storing data values. Python has no command for declaring a variable. A variable is created the moment you first assign a value to it.`;
  const formattedText = paragraphText
  .split('. ')
  .map(sentence => sentence.replace(/(Variables)/g, '<span class="bg-paperblack text-paperwhite p-1 rounded-sm">$1</span>'))
  .join('.<br /><br />');

  return (
    <div className='bg-paperblack grid grid-cols-3 gap-3 w-full h-screen p-4'> 
      <div className='bg-paperwhite col-start-1 col-span-1 rounded-4xl flex flex-col justify-center items-center'> 
        <div className='w-full flex-1 relative flex flex-col justify-center items-start p-8'>  
          <div>
            <h1 className='font-raleway text-[32px] text-paperblack font-bold'>3.2 Variables in Python</h1>
          </div>
          <div className='flex-1 flex flex-col justify-center items-start w-fit h-fit mt-10'>
            <p dangerouslySetInnerHTML={{ __html: formattedText }} className='text-[16px]/[20px]'></p>
          </div>
          <div className='mt-4'>
           <h1 className='text-2xl font-raleway font-bold'>Examples</h1>
           <div className='w-[342px] h-[113px] bg-paperblack rounded-4xl flex flex-col justify-center items-center mt-4'>
            {/* paragraphText */}
           </div>
          </div>
        </div>
        <div className='w-full h-[246px] border-4 border-paperblack rounded-4xl flex flex-col justify-center items-start p-8'>
          <h1 className='font-raleway text-[32px] text-paperblack font-bold'>Exercise</h1>
          <div className='w-fit h-fit flex flex-col justify-center items-center mt-4'>
          <p>Create three variables:<br/>
          <ul className='list-disc list-inside'>
            <li>name (your full name)</li>
            <li>age (your age)</li>
            <li>city (the city you live in)</li>
          </ul>
          </p>
            </div>
        </div> 
      </div>
      <div className='col-start-2 col-span-2 bg-paperwhite rounded-4xl relative flex flex-col justify-center items-center'>
        <div className='w-full h-20 border-4 border-paperblack outline-paperblack rounded-4xl flex items-center justify-start pl-16'>
          <h1 className='font-raleway text-[32px] text-paperblack font-bold'>Code Editor</h1>
        </div>
        <div className='flex-1 w-full h-auto flex flex-col justify-evenly items-center'> 
          <div className='w-[760px] h-[433px] bg-paperblack rounded-4xl p-4 overflow-hidden'> 
            <Editor 
              height="100%" 
              width="100%" 
              defaultLanguage='python' 
              defaultValue={content} 
              onMount={handleEditorDidMount}
              theme="myCustomTheme"
              options={{
                scrollbar: {
                  vertical: 'hidden',
                  horizontal: 'hidden',
                },
              }}
            />
          </div>
          <div className='w-full h-20 flex justify-start items-center pl-16 gap-4'>
          <ButtonComponent theme='dark' text='Submit' type = 'button' />
          <ButtonComponent theme='light' text='Ask Help' type = 'button' />
          <ButtonComponent theme='light' text='Community' type = 'button' />
          <ButtonComponent theme='light' text='FAQ' type = 'button' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeEditor
