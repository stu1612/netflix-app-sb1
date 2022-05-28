// npm
import { useContext, useState } from "react";

// files
import { AppContext } from "../../contexts/AppContext";
import useSubmit from "../../hooks/useSubmit";

export default function CreateSeason({ subId }) {
  // global state
  const { seasons, setSeasons } = useContext(AppContext);
  // local state
  const [season, setSeason] = useState("season " + 1);

  // properties
  const path = `media/categories/content/series/content/${subId}/content`;

  const payload = {
    season: season,
  };

  // Methods
  const { addItem, isLoading, error } = useSubmit(
    path,
    season,
    payload,
    seasons,
    setSeasons
  );

  // safeguard
  if (isLoading) return "Loading ..";
  if (error) return "Error ...";

  return (
    <form onSubmit={addItem}>
      <label>
        Season:
        <input
          type="text"
          placeholder="Add title"
          value={season}
          onChange={(event) => setSeason(event.target.value)}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
