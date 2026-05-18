import GameLayout from "./layouts/GameLayout";
import CharacterCard from "./components/CharacterCard";
import ActionButton from "./components/ActionButton";
import "./styles.css";

export default function App() {
  return (
    <GameLayout>
      <CharacterCard
        name="Cyber Ninja"
        role="Stealth Hacker"
        power="Invisibility"
      >
        <ActionButton>View Profile</ActionButton>
      </CharacterCard>

      <CharacterCard
        name="Mech Pilot"
        role="Defense Tank"
        power="Rocket Barrage"
      >
        <ActionButton variant="setup">
          Upgrade Gear
        </ActionButton>
      </CharacterCard>

      <CharacterCard
        name="Quantum Mage"
        role="Energy Support"
        power="Time Warp"
      >
        <ActionButton variant="start" onClick={() => console.log("Starting mission...")}>
          Start Mission
        </ActionButton>
      </CharacterCard>
    </GameLayout>
  );
}
