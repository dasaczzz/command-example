import { Command } from './Command';
import './index.css'

interface Props{
  command: Command<string | null, void>,
  text: string,
  content?: string
}

const OurButton: React.FC<Props> = ({command, text, content}) => (
  content ? (<button className='topbar-button' onClick={() => command.execute(content)}>{text}</button>) : (<button className='topbar-button' onClick={() => command.execute(null)}>{text}</button>)
)
  


export default OurButton;