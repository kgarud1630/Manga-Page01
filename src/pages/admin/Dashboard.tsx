import React from 'react';
import { BarChart2, Users, BookOpen, TrendingUp, ArrowUp, ArrowDown } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  return (
    <div>
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-dark-700 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Total Users</h3>
            <Users className="h-6 w-6 text-primary-500" />
          </div>
          <p className="text-3xl font-bold text-white">1,234</p>
          <div className="flex items-center mt-2 text-sm">
            <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-green-500">12%</span>
            <span className="text-gray-400 ml-2">vs last month</span>
          </div>
        </div>

        <div className="bg-dark-700 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Active Content</h3>
            <BookOpen className="h-6 w-6 text-primary-500" />
          </div>
          <p className="text-3xl font-bold text-white">456</p>
          <div className="flex items-center mt-2 text-sm">
            <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-green-500">8%</span>
            <span className="text-gray-400 ml-2">vs last month</span>
          </div>
        </div>

        <div className="bg-dark-700 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Revenue</h3>
            <BarChart2 className="h-6 w-6 text-primary-500" />
          </div>
          <p className="text-3xl font-bold text-white">$12,345</p>
          <div className="flex items-center mt-2 text-sm">
            <ArrowDown className="h-4 w-4 text-red-500 mr-1" />
            <span className="text-red-500">3%</span>
            <span className="text-gray-400 ml-2">vs last month</span>
          </div>
        </div>

        <div className="bg-dark-700 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Active Users</h3>
            <TrendingUp className="h-6 w-6 text-primary-500" />
          </div>
          <p className="text-3xl font-bold text-white">789</p>
          <div className="flex items-center mt-2 text-sm">
            <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-green-500">15%</span>
            <span className="text-gray-400 ml-2">vs last month</span>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-dark-700 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-dark-600 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-dark-500 rounded-full"></div>
                  <div>
                    <p className="text-white font-medium">Activity {item}</p>
                    <p className="text-gray-400 text-sm">2 hours ago</p>
                  </div>
                </div>
                <span className="text-gray-400 text-sm">Details</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-dark-700 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-6">Popular Content</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-dark-500 rounded"></div>
                <div>
                  <p className="text-white font-medium">Content Title {item}</p>
                  <p className="text-gray-400 text-sm">Views: {item * 1000}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-dark-700 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-6">New Users</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-dark-500 rounded-full"></div>
                <div>
                  <p className="text-white font-medium">User {item}</p>
                  <p className="text-gray-400 text-sm">Joined today</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;