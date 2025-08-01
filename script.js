function detectScam(content) {
  const patterns = [
    /free.*(money|gift|voucher)/i,
    /click.*(here|link)/i,
    /(urgent|immediate).*action/i,
    /bitcoin|crypto/i,
    /\baccount\b.*(locked|suspended)/i,
    /verify.*(account|identity)/i,
    /win.*(prize|competition)/i,
    /(claim|receive).*reward/i
  ];

  return patterns.some(regex => regex.test(content));
}

document.getElementById("scanBtn").addEventListener("click", () => {
  const input = document.getElementById("scanInput").value.trim();
  const resultBox = document.getElementById("resultBox");

    if (!input) {
      resultBox.textContent = "🚫 Please paste some content to scan.";
      return;
    }
  
    if (detectScam(input)) {
      resultBox.textContent = "⚠️ Scam detected!";
    } else {
      resultBox.textContent = "✅ No scam detected.";
    }
  });


