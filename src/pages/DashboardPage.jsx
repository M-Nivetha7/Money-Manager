import React, { useMemo, useState } from "react";
import DashboardLayout from "../components/Layout/DashboardLayout.jsx";
import Card from "../components/UI/Card.jsx";
import Input from "../components/UI/Input.jsx";
import Button from "../components/UI/Button.jsx";
import HeaderStats from "../components/UI/HeaderStats.jsx";
import AllocationBar from "../components/UI/AllocationBar.jsx";
import PieLegend from "../components/UI/PieLegend.jsx";

function DashboardPage() {
  const [salary, setSalary] = useState(50000);
  const [customNeeds, setCustomNeeds] = useState(50);
  const [customWants, setCustomWants] = useState(30);
  const [customSavings, setCustomSavings] = useState(20);
  const [error, setError] = useState("");

  const { needsAmount, wantsAmount, savingsAmount } = useMemo(() => {
    const s = Number(salary) || 0;
    return {
      needsAmount: Math.round(s * 0.5),
      wantsAmount: Math.round(s * 0.3),
      savingsAmount: Math.round(s * 0.2),
    };
  }, [salary]);

  const handleApplyCustom = () => {
    const total =
      Number(customNeeds) + Number(customWants) + Number(customSavings);
    if (total !== 100) {
      setError("Your custom percentages must add up to 100.");
      return;
    }
    setError("");
  };

  const customNeedsAmount = Math.round(
    (Number(salary) || 0) * (Number(customNeeds) / 100)
  );
  const customWantsAmount = Math.round(
    (Number(salary) || 0) * (Number(customWants) / 100)
  );
  const customSavingsAmount = Math.round(
    (Number(salary) || 0) * (Number(customSavings) / 100)
  );

  const ruleAdvice =
    Number(salary) <= 0
      ? "Enter a positive salary to get advice."
      : "This split follows the 50/30/20 rule: half of your salary goes to essential needs, 30% to lifestyle choices, and 20% gets invested or saved for future goals.";

  const customAdvice =
    Number(salary) > 0
      ? `With your custom split, you will spend ₹${customNeedsAmount.toLocaleString()} on needs, ₹${customWantsAmount.toLocaleString()} on wants, and invest ₹${customSavingsAmount.toLocaleString()} each month. Check if your needs are realistically covered before pushing savings too high.`
      : "Set a salary and custom percentages to see a tailored breakdown.";

  return (
    <DashboardLayout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <Card>
          <HeaderStats
            salary={Number(salary) || 0}
            needs={needsAmount}
            wants={wantsAmount}
            savings={savingsAmount}
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.3fr) minmax(0, 1fr)",
              gap: "1.25rem",
            }}
          >
            <div>
              <Input
                label="Monthly salary (after tax)"
                type="number"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                placeholder="Enter your take-home salary"
              />
              <AllocationBar
                needsPct={50}
                wantsPct={30}
                savingsPct={20}
              />
              <p
                style={{
                  marginTop: "0.8rem",
                  fontSize: "0.85rem",
                  color: "#9ca3af",
                  lineHeight: 1.5,
                }}
              >
                {ruleAdvice}
              </p>
            </div>
            <div>
              <PieLegend
                needs={needsAmount}
                wants={wantsAmount}
                savings={savingsAmount}
              />
            </div>
          </div>
        </Card>

        <Card>
          <h3
            style={{
              fontSize: "1.1rem",
              fontWeight: 600,
              marginBottom: "0.75rem",
            }}
          >
            Customise your percentages
          </h3>
          <p
            style={{
              fontSize: "0.85rem",
              color: "#9ca3af",
              marginBottom: "1rem",
            }}
          >
            Start from 50/30/20 and tweak to match your real life. The total
            must remain 100%.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0,1fr))",
              gap: "0.75rem",
              marginBottom: "0.75rem",
            }}
          >
            <Input
              label="Needs %"
              type="number"
              value={customNeeds}
              onChange={(e) => setCustomNeeds(e.target.value)}
            />
            <Input
              label="Wants %"
              type="number"
              value={customWants}
              onChange={(e) => setCustomWants(e.target.value)}
            />
            <Input
              label="Savings %"
              type="number"
              value={customSavings}
              onChange={(e) => setCustomSavings(e.target.value)}
            />
          </div>
          {error && <p className="error-text">{error}</p>}
          <div style={{ marginBottom: "1rem" }}>
            <Button onClick={handleApplyCustom}>Apply custom split</Button>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0,1fr))",
              gap: "1rem",
              fontSize: "0.9rem",
              color: "#e5e7eb",
            }}
          >
            <div>
              <p style={{ color: "#9ca3af", marginBottom: "0.2rem" }}>
                Needs budget
              </p>
              <p>₹ {customNeedsAmount.toLocaleString()}</p>
            </div>
            <div>
              <p style={{ color: "#9ca3af", marginBottom: "0.2rem" }}>
                Wants budget
              </p>
              <p>₹ {customWantsAmount.toLocaleString()}</p>
            </div>
            <div>
              <p style={{ color: "#9ca3af", marginBottom: "0.2rem" }}>
                Monthly investments
              </p>
              <p>₹ {customSavingsAmount.toLocaleString()}</p>
            </div>
          </div>
          <p
            style={{
              marginTop: "0.75rem",
              fontSize: "0.85rem",
              color: "#9ca3af",
              lineHeight: 1.5,
            }}
          >
            {customAdvice}
          </p>
        </Card>
      </div>
    </DashboardLayout>
  );
}

export default DashboardPage;
