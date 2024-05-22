**Weather App**

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!city.trim()) {
      setError(true);
      return;
    }

    //USE YOUR OWN API KEY FROM https://openweathermap.org/api
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=71a410fb7f8d6bd2c232b0bead54e418`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setWeather(data);
        setError(false);
      })
      .catch((err) => {
        setError(true);
      });
  };


  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setWeather(data);
        setError(false);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);