interface Props {
  searches: string[];
  onLabelClick: (searchTerm: string) => void;
}

export const PreviousSearches: React.FC<Props> = ({
  searches,
  onLabelClick,
}) => {
  return (
    <div className="previous-searches">
      <h2>Previous Searches</h2>
      <ul className="previous-searches-list">
        {searches.map((search) => (
          <li key={search} onClick={() => onLabelClick(search)}>
            {search}
          </li>
        ))}
      </ul>
    </div>
  );
};
