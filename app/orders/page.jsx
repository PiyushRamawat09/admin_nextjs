"use client";

import { motion } from "framer-motion";
import StatCard from "@/components/StatCard";
import { Ban, CheckCircle, Clock, Package } from "lucide-react";
import OrdersTable from "@/components/OrdersTable";

const ordersData = {
  orderStats: [
    { name: "Total Orders", value: "1,234", icon: "Package" },
    { name: "Completed Orders", value: "1,089", icon: "CheckCircle" },
    { name: "Pending Orders", value: "56", icon: "Clock" },
    { name: "Cancelled Orders", value: "89", icon: "Ban" },
  ],
};

const iconMap = {
  Package,
  Clock,
  CheckCircle,
  Ban,
};

const OrdersPage = () => {
  return (
    <div className="flex-1 relative overflow-auto z-10">
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
        >
          {ordersData.orderStats.map(({ name, value, icon }) => {
            const IconComponent = iconMap[icon];
            return (
              <StatCard
                key={name}
                name={name}
                icon={IconComponent}
                value={value}
              />
            );
          })}
        </motion.div>

        <OrdersTable />
      </main>
    </div>
  );
};

export default OrdersPage;
