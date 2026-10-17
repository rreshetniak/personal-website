import type { Metadata } from 'next';
import '../globals.css';
export const metadata:Metadata={title:'Ruslan Reshetniak — Independent IT Consultant',description:'Independent IT consulting, software development and quality assurance. English, Deutsch, Русский.',robots:{index:false,follow:false},icons:{icon:'/favicon.svg'}};
export default function EntryLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>;}
