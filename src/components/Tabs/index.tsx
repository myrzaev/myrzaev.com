import { StyledCardButtons } from "./styled";

interface ITabsProps {
  tabs: string[];
  section: string;
  onChange: (item: string) => void;
}

function Tabs({ tabs, section, onChange }: ITabsProps) {
  return (
    <StyledCardButtons>
      {tabs.map((item: string) => (
        <button
          key={item}
          className={section === item ? "is-active" : ""}
          data-section={`#${item}`}
          onClick={() => onChange(item)}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </StyledCardButtons>
  );
}

export default Tabs;
