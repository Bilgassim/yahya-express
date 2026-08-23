/**
 * YAHYA EXPRESS - Delivery Cost Calculator
 * Computes estimated pricing based on service, Berkane zone & urgency.
 */

document.addEventListener('DOMContentLoaded', () => {
  const calcForm = document.getElementById('deliveryCalcForm');
  const serviceSelect = document.getElementById('calcServiceType');
  const zoneSelect = document.getElementById('calcZone');
  const speedRadios = document.querySelectorAll('input[name="calcSpeed"]');
  const priceDisplay = document.getElementById('calcPriceOutput');
  const timeDisplay = document.getElementById('calcTimeOutput');
  const orderWithQuoteBtn = document.getElementById('calcOrderBtn');

  if (!calcForm || !priceDisplay) return;

  // Base pricing matrix (in MAD / Moroccan Dirham)
  const basePrices = {
    'colis': 15,
    'courses': 20,
    'restauration': 15,
    'pharmacie': 15,
    'volumineux': 30
  };

  const zoneMultipliers = {
    'centre': 0,
    'quartiers': 5,
    'sidi-slimane': 10,
    'saidia': 35
  };

  const speedAddons = {
    'standard': { price: 0, time: '20 - 35 min' },
    'express': { price: 10, time: '10 - 20 min chrono' },
    'planifie': { price: 0, time: 'À l\'heure convenue' }
  };

  function calculateEstimate() {
    const service = serviceSelect ? serviceSelect.value : 'colis';
    const zone = zoneSelect ? zoneSelect.value : 'centre';
    
    let speed = 'standard';
    speedRadios.forEach(radio => {
      if (radio.checked) speed = radio.value;
    });

    const base = basePrices[service] || 15;
    const zoneExtra = zoneMultipliers[zone] || 0;
    const speedExtra = speedAddons[speed]?.price || 0;
    const total = base + zoneExtra + speedExtra;
    const estTime = speedAddons[speed]?.time || '20 - 35 min';

    // Update UI with smooth animation
    priceDisplay.innerHTML = `${total} <span>DH</span>`;
    if (timeDisplay) {
      timeDisplay.textContent = `⏱️ Délai estimé : ${estTime}`;
    }

    // Update WhatsApp link with calculated parameters
    if (orderWithQuoteBtn) {
      const serviceName = serviceSelect?.options[serviceSelect.selectedIndex]?.text || service;
      const zoneName = zoneSelect?.options[zoneSelect.selectedIndex]?.text || zone;
      
      const msg = `⚡ *COMMANDE ESTIMÉE VIA SITE WEB - YAHYA EXPRESS* ⚡\n\n` +
        `📦 *Service :* ${serviceName}\n` +
        `📍 *Secteur :* ${zoneName}\n` +
        `🚀 *Option :* ${speed.toUpperCase()} (${estTime})\n` +
        `💰 *Estimation Tarifaire :* ~${total} DH\n\n` +
        `Bonjour Yahya Express, je souhaite valider cette livraison s'il vous plaît !`;

      orderWithQuoteBtn.href = `https://wa.me/212600488901?text=${encodeURIComponent(msg)}`;
    }
  }

  // Event Listeners for live update
  if (serviceSelect) serviceSelect.addEventListener('change', calculateEstimate);
  if (zoneSelect) zoneSelect.addEventListener('change', calculateEstimate);
  speedRadios.forEach(radio => radio.addEventListener('change', calculateEstimate));

  // Initial calculation
  calculateEstimate();
});
