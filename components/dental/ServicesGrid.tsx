interface Service {
  id: string;
  icon: string;
  title: string;
  price: string;
  desc: string;
}

export default function ServicesGrid({ services }: { services: Service[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service) => (
        <div
          key={service.id}
          className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-dental-teal/20 group"
        >
          <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{service.icon}</div>
          <h3 className="font-bold text-lg text-dental-dark">{service.title}</h3>
          <p className="text-dental-teal font-bold text-2xl my-2">{service.price}</p>
          <p className="text-slate-500 text-sm">{service.desc}</p>
          <button className="mt-4 text-sm font-medium text-amber-500 hover:text-amber-600 flex items-center gap-1">
            Prenota →
          </button>
        </div>
      ))}
    </div>
  );
}