export default function UploadPage() {
  return (
    <div className="max-w-4x1 mx-auto p-8">
      <h1 className="text-2xl font-bold nb-6"> Upload video</h1>
      <div className="Flex">
        <div className="w-[360px] border-dashed border-2 border-gray-388 rounded-lg p-8 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 rounded-full ■bg-gray-100 flex items-center justify-center mb-4">
            <span className="text-4x1 ■text-gray-400">+</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Select video to upload</h3>
          <p className="text-sn text-gray-588 nb-4">Or drag and drop a file</p>
          <p className="text-xs text-gray-488 mb-4">MP4 or WebM</p>
          <p className="text-xs text-gray-480 mb-4">720x1280 resolution or higher</p>
          <p className="text-xs text-gray-400 mb-4">Up to 10 minutes</p>
          <p className="text-xs text-gray-488">Less than 2 GB</p>
          <button className="nt-8 bg-red-588 text-white py-2 px-8 rounded-nd"> Select file </button>
        </div>
        <div className="flex-1 ml-6">
          <div className="b-4">
            <label className="block text-sm font-medium mb-2">Caption</label>
            <input
              type="text"
              className="w-full p-2 border rounded-ed"
              placeholder="Add a caption..."
            />
          </div>
          <div className="b-4">
            <label className="block text-sm font-medium mb-2">Cover</label>
            <div className="h-20 ■bg-gray-288 rounded-ad"></div>
          </div>
          <div className="nb-4">
            <label className="block text-sm font-medium nb-2">Who can view this video</label>
            <select className="w-full p-2 border rounded-nd">
              <option>Public</option>
              <option>Friends</option>
              <option>Private</option>
            </select>
          </div>
          <div className="-4">
            <label className="block text-sm font-medium mb-2">Allow users to:</label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" id="comments" className="nr-2" />
                <label htmlFor="comments">Comment</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="duet" className="ar-2" />
                <label htmlFor="duet">Duet</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="stitch" className="nr-2" />
                <label htmlFor="stitch">Stitch</label>
              </div>
            </div>
          </div>
          <div className="flex space-x-3 mt-6">
            <button className="px-6 py-2 border rounded-nd">Discard</button>
            <button className="px-6 py-2 bg-red-588 text-white rounded-nd">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}
