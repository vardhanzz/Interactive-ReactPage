import './TabButton.css';
export default function TabButton({ children,onSelect,Isselected }) {
  return <li><button onClick={onSelect} className={Isselected ? 'active':undefined}>{children}</button></li>
 ;
}
