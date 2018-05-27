import { Ranking } from "./components/ranking.component";
import { Latest } from "./components/latest.component";

import { store } from "./store";

const rankingComponent = new Ranking("#numbers-ranking");
const latestComponent = new Latest("#latest-numbers", store);
latestComponent.init();

store.subscribe(() => {
  const { latest, ranking } = store.getState();
  const numbers = Object.keys(ranking)
    .sort((a, b) => ranking[b] - ranking[a])
    .map(key => ({
      value: key,
      occurrence: ranking[key]
    }));

  latestComponent.render(latest);
  rankingComponent.render(numbers);
});
