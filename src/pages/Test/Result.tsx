import { useState } from "react";
import styles from "./Result.module.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface ResultProps {
  totalPoints: number;
  answers: { [key: string]: number };
}

function Result({ totalPoints, answers }: ResultProps) {
  const levelsInfo = [
    {
      level: "Новачок (Novice)",
      description:
        "Новачки дуже переживають за свою успішність; їх досвіду замало, щоб повести їх у правильному напрямку і вони не знають чи їх вчинки будуть правильними. Новачки зазвичай не хочуть вчитися, зате хочуть досягти миттєвого результату. Вони не знають як реагувати на помилки і тому легко збиваються з пантелику, коли щось іде “не так”. Зате вони можуть бути досить ефективними, коли їм дати набір контекстно незалежних правил у формі “у випадку ХХХ, роби УУУ”. Іншими словами їм необхідний рецепт або алгоритм.",
    },
    {
      level: "Твердий початківець (Advanced beginner)",
      description:
        "Тверді початківці починають вже потроху відступати від фіксованих правил. Вони можуть спробувати якісь задачі самостійно, але у них все ще є труднощі із усуненням проблем, які виникають. Початківці можуть скористатись порадами в правильному контексті, врахувавши свій досвід подібних ситуацій, але ледь-ледь. І хоч вони вже починають формулювати якісь загальні принципи, вони все ще не бачать “всієї картини”. Якщо спробувати надати їм ширший контекст – вони відмахнуться від нього як від недоречного.",
    },
    {
      level: "Компетентний (Competent)",
      description:
        "Компетентні будують правильні моделі проблемної області та ефективно нею користуються. Здатні усувати проблеми з якими раніше не стикались. Про людей на цьому рівні часто кажуть, що вони “мають ініціативу”. Вони можуть вчити новачків і не задовбують експертів. Щоправда їм ще бракує досвіду аби вдало розставити пріоритети при рішенні задач. Власне кажучи, саме з цього рівня людину можна вже назвати інженером – компетентні вирішують задачі, а не працюють за алгоритмом.",
    },
    {
      level: "Досвідчений (Proficient)",
      description:
        "Досвідченим необхідна “повна картина” проблемної області, адже вони хочуть розуміти весь концепт. Вони роблять значний прорив в рамках моделі братів Дрейфус, адже постійно оцінюють виконану роботу і переглядають свої підходи, аби наступного разу бути ще ефективнішими. Вони також можуть навчатись використовуючи чужий досвід. І найголовніше – вони завжди беруть до уваги контекст задачі. Якщо повернутись до програмування, то чудовий приклад ілюстрації – це використання патернів проектування. Лише досвідчені використовують їх виключно там де треба, а не бездумно і повсюдно, бо це круто і модно.",
    },
    {
      level: "Експерт (Expert)",
      description:
        "Експерти – основне джерело знань та інформації в будь-якій сфері. Вони безперестану шукають все кращі і кращі методи роботи. Вони завжди застосовують весь свій велетенський багаж знань у правильному контексті. Вони пишуть книжки, статті та проводять семінари. Це сучасні чаклуни. Експерти керуються інтуїцією . Доктор Хаус, який з одного погляду на пацієнта (або взагалі на його медичну картку) міг поставити діагноз – типовий приклад експерта. Експерти працюють за допомогою несвідомого “порівняння з взірцем” (“pattern matching”) у базі свого досвіду. От тільки проблема в тому, що функція “порівняння з взірцем” асинхронна і знаходиться в частині мозку, яка не підконтрольна свідомості.",
    },
  ];
  const determineLevel = (totalPoints: number) => {
    const levelsInfo = [
      {
        level: "Новачок (Novice)",
        range: [0, 20],
        description:
          "Новачки дуже переживають за свою успішність; їх досвіду замало, щоб повести їх у правильному напрямку і вони не знають чи їх вчинки будуть правильними. Новачки зазвичай не хочуть вчитися, зате хочуть досягти миттєвого результату. Вони не знають як реагувати на помилки і тому легко збиваються з пантелику, коли щось іде “не так”. Зате вони можуть бути досить ефективними, коли їм дати набір контекстно незалежних правил у формі “у випадку ХХХ, роби УУУ”. Іншими словами їм необхідний рецепт або алгоритм.",
      },
      {
        level: "Твердий початківець (Advanced beginner)",
        range: [21, 35],
        description:
          "Тверді початківці починають вже потроху відступати від фіксованих правил. Вони можуть спробувати якісь задачі самостійно, але у них все ще є труднощі із усуненням проблем, які виникають. Початківці можуть скористатись порадами в правильному контексті, врахувавши свій досвід подібних ситуацій, але ледь-ледь. І хоч вони вже починають формулювати якісь загальні принципи, вони все ще не бачать “всієї картини”. Якщо спробувати надати їм ширший контекст – вони відмахнуться від нього як від недоречного.",
      },
      {
        level: "Компетентний (Competent)",
        range: [36, 50],
        description:
          "Компетентні будують правильні моделі проблемної області та ефективно нею користуються. Здатні усувати проблеми з якими раніше не стикались. Про людей на цьому рівні часто кажуть, що вони “мають ініціативу”. Вони можуть вчити новачків і не задовбують експертів. Щоправда їм ще бракує досвіду аби вдало розставити пріоритети при рішенні задач. Власне кажучи, саме з цього рівня людину можна вже назвати інженером – компетентні вирішують задачі, а не працюють за алгоритмом.",
      },
      {
        level: "Досвідчений (Proficient)",
        range: [51, 65],
        description:
          "Досвідченим необхідна “повна картина” проблемної області, адже вони хочуть розуміти весь концепт. Вони роблять значний прорив в рамках моделі братів Дрейфус, адже постійно оцінюють виконану роботу і переглядають свої підходи, аби наступного разу бути ще ефективнішими. Вони також можуть навчатись використовуючи чужий досвід. І найголовніше – вони завжди беруть до уваги контекст задачі. Якщо повернутись до програмування, то чудовий приклад ілюстрації – це використання патернів проектування. Лише досвідчені використовують їх виключно там де треба, а не бездумно і повсюдно, бо це круто і модно.",
      },
      {
        level: "Експерт (Expert)",
        range: [66, Infinity],
        description:
          "Експерти – основне джерело знань та інформації в будь-якій сфері. Вони безперестану шукають все кращі і кращі методи роботи. Вони завжди застосовують весь свій велетенський багаж знань у правильному контексті. Вони пишуть книжки, статті та проводять семінари. Це сучасні чаклуни. Експерти керуються інтуїцією . Доктор Хаус, який з одного погляду на пацієнта (або взагалі на його медичну картку) міг поставити діагноз – типовий приклад експерта. Експерти працюють за допомогою несвідомого “порівняння з взірцем” (“pattern matching”) у базі свого досвіду. От тільки проблема в тому, що функція “порівняння з взірцем” асинхронна і знаходиться в частині мозку, яка не підконтрольна свідомості.",
      },
    ];

    for (const { level, range, description } of levelsInfo) {
      const [min, max] = range;
      if (totalPoints >= min && totalPoints <= max) {
        return { level, description };
      }
    }

    return { level: "Новачок (Novice)", description: "..." };
  };
  const { level, description } = determineLevel(totalPoints);

  const levelSums: { [key: string]: number } = {};
  Object.keys(answers).forEach((answerKey) => {
    const levelKey = answerKey.split("_")[1];
    levelSums[levelKey] = (levelSums[levelKey] || 0) + answers[answerKey];
  });

  const chartData = levelsInfo.map(({ level }, index) => ({
    name: level,
    value: levelSums[index.toString()] || 0,
  }));
  const [showChart, setShowChart] = useState(false);

  const handleStatisticsClick = () => {
    setShowChart(!showChart);
  };
  return (
    <div className={styles.container}>
      <h1>Result</h1>
      {!showChart && (
        <div className={styles.resultContainer}>
          <div className={styles.infoContainer}>
            <p className={styles.score}>{totalPoints}/80</p>
            <p className={styles.level}>Ти {level}</p>
            <p className={styles.desc}>{description}</p>
          </div>
          <button
            className={styles.statisticsButton}
            onClick={handleStatisticsClick}
          >
            Переглянути статистику
          </button>
        </div>
      )}

      {showChart && (
        <div className={styles.chartContainer}>
          <BarChart width={400} height={300} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="blue" />
          </BarChart>
          <button
            className={styles.statisticsButton}
            onClick={handleStatisticsClick}
          >
            Переглянути результат
          </button>
        </div>
      )}
    </div>
  );
}

export default Result;
