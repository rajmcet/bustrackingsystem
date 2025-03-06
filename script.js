// Example Bus Data (In a real-world scenario, this should be replaced with API calls)
const busData = [
    { id: 1, busNo: '101', busName: 'Downtown Express', source: 'Downtown', destination: 'Airport', timings: '10:00 AM, 12:00 PM, 2:00 PM', location: { lat: 40.7128, lng: -74.0060 } }, // New York
    { id: 2, busNo: '202', busName: 'Park Shuttle', source: 'Central Park', destination: 'Uptown', timings: '9:30 AM, 11:30 AM, 1:30 PM', location: { lat: 34.0522, lng: -118.2437 } }, // Los Angeles
    { id: 3, busNo: '303', busName: 'Beach Cruiser', source: 'Old Town', destination: 'Beach', timings: '8:00 AM, 10:00 AM, 12:00 PM', location: { lat: 51.5074, lng: -0.1278 } } // London
  ];
  
  // Function to search for buses based on source and destination
  function searchBus() {
    const source = document.getElementById('source').value.trim();
    const destination = document.getElementById('destination').value.trim();
    const busListElement = document.getElementById('bus-list');
    busListElement.innerHTML = ''; // Clear previous search results
  
    const buses = busData.filter(bus => 
      bus.source.toLowerCase().includes(source.toLowerCase()) &&
      bus.destination.toLowerCase().includes(destination.toLowerCase())
    );
  
    if (buses.length > 0) {
      buses.forEach(bus => {
        const busBox = document.createElement('div');
        busBox.classList.add('bus-box');
        busBox.innerHTML = `
          <h3>${bus.busName} (${bus.busNo})</h3>
          <p><strong>Timings:</strong> ${bus.timings}</p>
          <button class="view-location-btn" onclick="viewLocation(${bus.id})">View Location</button>
        `;
        busListElement.appendChild(busBox);
      });
    } else {
      busListElement.innerHTML = '<p>No buses found for the given route.</p>';
    }
  }
  
  // Function to view the location of a selected bus
  function viewLocation(busId) {
    const bus = busData.find(b => b.id === busId);
    if (bus) {
      // Open Google Maps with the bus's current location
      const busLocation = bus.location;
      const googleMapsUrl = `https://www.google.com/maps?q=${busLocation.lat},${busLocation.lng}`;
      
      // Redirect to Google Maps with the bus's coordinates
      window.open(googleMapsUrl, '_blank');
    }
  }
  
  // Function to hide the bus location information (if necessary)
  function hideLocation() {
    document.getElementById('bus-location').style.display = 'none'; // Hide the location section
  }
  