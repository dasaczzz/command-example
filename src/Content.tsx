import { useState } from 'react';
import { SaveCommand, UndoCommand } from './Command';
import './index.css'
import OurButton from './OurButton';

const Content: React.FC = () => {
  const [content, setContent] = useState('') 
  const [history, setHistory] = useState<string[]>([]);

  const saveCommand = new SaveCommand(history)
  const undoCommand = new UndoCommand(history, setHistory, setContent)
  return (
    <>
      <div className='topbar'>
        <h1>Our docs</h1>
        <div className='topbar-buttons-div'>
          <OurButton command={saveCommand} text='save' content={content}/>
          <OurButton command={undoCommand} text='undo' content={content}/>
        </div>
      </div>
      <textarea 
        className="docs-textarea"
        placeholder="Escribe aquí..." value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </>
  );
};

export default Content;