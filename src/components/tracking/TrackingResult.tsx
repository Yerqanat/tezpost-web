import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Separator } from "@/src/components/ui/separator";
import { CheckCircle2, Circle, Package, Truck } from "lucide-react";

export default function TrackingResult() {
  // Mock data
  const shipment = {
    trackingCode: "TEZ-123456789",
    status: "In Transit",
    origin: "Guangzhou, China",
    destination: "Almaty, Kazakhstan",
    estimatedDelivery: "2023-11-30",
    events: [
      {
        date: "2023-11-25",
        time: "14:30",
        description: "Arrived at sorting center",
        location: "Almaty, Kazakhstan",
        completed: true,
      },
      {
        date: "2023-11-24",
        time: "09:15",
        description: "Departed from customs",
        location: "Almaty, Kazakhstan",
        completed: true,
      },
      {
        date: "2023-11-22",
        time: "18:00",
        description: "Shipped from warehouse",
        location: "Guangzhou, China",
        completed: true,
      },
      {
        date: "2023-11-21",
        time: "10:00",
        description: "Order received",
        location: "Guangzhou, China",
        completed: true,
      },
    ],
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-8 space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl font-bold flex items-center gap-2">
                <Package className="h-6 w-6 text-primary" />
                {shipment.trackingCode}
              </CardTitle>
              <CardDescription className="mt-2">
                Status: <span className="font-semibold text-primary">{shipment.status}</span>
              </CardDescription>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Estimated Delivery</p>
              <p className="font-bold">{shipment.estimatedDelivery}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">From</p>
              <p className="font-semibold">{shipment.origin}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">To</p>
              <p className="font-semibold">{shipment.destination}</p>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {shipment.events.map((event, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  {event.completed ? (
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  ) : (
                    <Circle className="w-6 h-6 text-slate-300" />
                  )}
                </div>
                
                {/* Content */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-slate-200 shadow-sm bg-white dark:bg-slate-950">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-slate-900 dark:text-slate-100">{event.description}</div>
                    <time className="font-caveat font-medium text-indigo-500">{event.time}</time>
                  </div>
                  <div className="text-slate-500 dark:text-slate-400">{event.location}</div>
                  <div className="text-xs text-slate-400 mt-1">{event.date}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
