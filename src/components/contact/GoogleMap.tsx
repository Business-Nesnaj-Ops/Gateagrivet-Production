const GoogleMap = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7823.822912101576!2d121.0866942362263!3d14.273154952576286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d90a329bd0df%3A0xa0a6fb3a650dcc7c!2sGateAgrivet%20STA%20ROSA%20LAGUNA!5e1!3m2!1sen!2sph!4v1748909589151!5m2!1sen!2sph"
        
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