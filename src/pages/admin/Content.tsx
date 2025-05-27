import React, { useState } from 'react';
import { Search, Filter, Plus, Edit2, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminContent: React.FC = () => {
  const [selectedType, setSelectedType] = useState<'all' | 'manga' | 'anime'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h1 className="text-2xl font-bold text-white">Content Management</h1>
        <Link
          to="/admin/upload"
          className="btn-primary inline-flex items-center"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add New Content
        </Link>
      </div>

      {/* Filters and Search */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="col-span-1 md:col-span-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search content..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-dark-600 border border-dark-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>

        <div>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value as 'all' | 'manga' | 'anime')}
            className="w-full px-4 py-2 bg-dark-600 border border-dark-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="all">All Types</option>
            <option value="manga">Manga</option>
            <option value="anime">Anime</option>
          </select>
        </div>

        <div>
          <button className="w-full px-4 py-2 bg-dark-600 border border-dark-500 rounded-lg text-white hover:bg-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500 inline-flex items-center justify-center">
            <Filter className="h-5 w-5 mr-2" />
            More Filters
          </button>
        </div>
      </div>

      {/* Content Table */}
      <div className="bg-dark-700 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-dark-600">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Views</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Last Updated</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-600">
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item} className="hover:bg-dark-600">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-dark-500 rounded"></div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-white">Content Title {item}</div>
                        <div className="text-sm text-gray-400">ID: {item}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-primary-100 text-primary-800">
                      {item % 2 === 0 ? 'Manga' : 'Anime'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {item * 1000}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    2 hours ago
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-primary-500 hover:text-primary-400 mr-3">
                      <Edit2 className="h-5 w-5" />
                    </button>
                    <button className="text-red-500 hover:text-red-400">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="bg-dark-600 px-6 py-4 flex items-center justify-between">
          <div className="text-sm text-gray-400">
            Showing 1 to 5 of 20 entries
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 rounded bg-dark-500 text-white hover:bg-dark-400">
              Previous
            </button>
            <button className="px-3 py-1 rounded bg-primary-600 text-white">
              1
            </button>
            <button className="px-3 py-1 rounded bg-dark-500 text-white hover:bg-dark-400">
              2
            </button>
            <button className="px-3 py-1 rounded bg-dark-500 text-white hover:bg-dark-400">
              3
            </button>
            <button className="px-3 py-1 rounded bg-dark-500 text-white hover:bg-dark-400">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminContent;