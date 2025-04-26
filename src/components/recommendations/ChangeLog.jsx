export default function ChangeLog({ changes }) {
  if (!changes || changes.length === 0) {
    return (
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Update History</h2>
        <p className="text-gray-600">No updates recorded yet.</p>
      </div>
    );
  }

  return (
    <div className="mt-8 p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Update History</h2>
      <div className="space-y-3">
        {changes.map((change, index) => (
          <div key={index} className="flex items-start space-x-3 pb-3 border-b border-gray-200 last:border-0">
            <div className="flex-shrink-0">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2"></span>
            </div>
            <div>
              <p className="font-medium">{change.app} ({change.appMaker})</p>
              <p className="text-sm text-gray-600">Status: {change.status}</p>
              <p className="text-xs text-gray-500">
                {new Date(change.modifiedTime).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
