import { useState, useEffect } from "react";

export const useGeolocation = () => {
	const [location, setLocation] = useState<{
		latitude: number;
		longitude: number;
	} | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchLocation = async () => {
			try {
				if ("geolocation" in navigator) {
					navigator.geolocation.getCurrentPosition(
						(position) => {
							const { latitude, longitude } = position.coords;
							setLocation({ latitude, longitude });
						},
						(error) => {
							console.error("Error getting geolocation:", error);
							setError("Unable to retrieve your location");
						}
					);
				} else {
					console.error("Geolocation not supported");
					setError("Geolocation not supported by your browser");
				}
			} catch (error) {
				console.error("Error fetching geolocation:", error);
				setError("Error fetching geolocation");
			}
		};

		fetchLocation();
	}, []);

	return { location, error };
};

export const getCityFromCoordinates = async (
	lat: number,
	lon: number
): Promise<string> => {
	try {
		const response = await fetch(
			`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
		);
		const data = await response.json();
		const city =
			data.city + ", " + data.principalSubdivision + ", " + data.countryName;
		return city;
	} catch (error) {
		console.error("Error fetching city:", error);
		return "Unknown";
	}
};
