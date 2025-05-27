const GoogleMap = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123488.03083408444!2d120.96629581132491!3d14.590160645126641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca03571ec38b%3A0x69d1d5751069c11f!2sMetro%20Manila!5e0!3m2!1sen!2sph!4v1710432163043!5m2!1sen!2sph"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Store Location"
      />
    </div>
  );
};

export default GoogleMap;