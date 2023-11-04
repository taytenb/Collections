import './App.css';
import './Components.css';
import Point from "./components/points"
function App() {
  const points = [{
    "Player": "Joel Embiid",
    "PPG": "33.1",
    "Image": "https://th.bing.com/th/id/OIP.6TTeEwvm60lpmrh6TIhZtgHaFm?w=242&h=184&c=7&r=0&o=5&dpr=2.5&pid=1.7"
  },
    {
      "Player": "Luka Doncic",
      "PPG": "32.4",
      "Image": "https://th.bing.com/th/id/OIP.E1ONvFtqdoGq2Qw4M4LdxgHaE8?w=250&h=180&c=7&r=0&o=5&dpr=2.5&pid=1.7"
    }, 
    {
      "Player": "Damian Lillard",
      "PPG": "32.2",
      "Image": "https://th.bing.com/th/id/OIP.il7oAQuz5HHW2hP7EIUTRgHaE8?w=277&h=185&c=7&r=0&o=5&dpr=2.5&pid=1.7"
    },
    {
      "Player": "Shai Gilgeous Alexander",
      "PPG": "31.4",
      "Image": "https://th.bing.com/th/id/OIP.yhAUSHZ5CeHFgDY4QaMLHgHaE4?w=284&h=186&c=7&r=0&o=5&dpr=2.5&pid=1.7"
    },
    {
      "Player": "Giannis Antetokounmpo",
      "PPG": "31.1",
      "Image": "https://th.bing.com/th/id/OIP.qxil5bp703BLOfId3xsqtwHaE5?w=273&h=180&c=7&r=0&o=5&dpr=2.5&pid=1.7"
    },
  {
      "Player": "Jayson Tatum",
      "PPG": "30.1",
      "Image": "https://th.bing.com/th/id/OIP.Fv17G3D5UcflmT1KFqBxXAHaGb?w=187&h=180&c=7&r=0&o=5&dpr=2.5&pid=1.7"
    },
  {
      "Player": "Donovan Mitchell",
      "PPG": "28.3",
      "Image": "https://th.bing.com/th/id/OIP.qo3eNP0Rm75EPUwu_zrLrwHaFn?w=216&h=180&c=7&r=0&o=5&dpr=2.5&pid=1.7"
    },
    {
      "Player": "Kyrie Irving",
      "PPG": "27.3",
      "Image": "https://th.bing.com/th/id/OIP.K-LKHetDNlkmcPxhBNm-iAHaE8?w=255&h=180&c=7&r=0&o=5&dpr=2.5&pid=1.7"
    },
    {
      "Player": "Jaylen Brown",
      "PPG": "26.6",
      "Image": "https://th.bing.com/th/id/OIP.YH3LvZT7NSyypSI1Jebm6gHaE8?w=272&h=181&c=7&r=0&o=5&dpr=2.5&pid=1.7"
    },
    {
      "Player": "Trae Young",
      "PPG": "26.2",
      "Image": "https://th.bing.com/th/id/OIP.yOY7CzRTtzRucyLLVzyVpAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=2.5&pid=1.7"
    }
  ]
  return (
    <div className="App">
    <div className="header"> 
      <span className = "headerSpan">Top 10 PPG 2022-2023 NBA</span>
    </div>
    {/* body */}
    <div className="thebody">
      {points.map(player => 
        <Point Player={player.Player} PPG={player.PPG} Image={player.Image}/>
      )}
    </div>
    </div>
  );
}

export default App;
