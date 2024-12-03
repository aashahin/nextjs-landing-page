import Dialog from './ui/dialog';
import { Button } from './ui/button';

const PreviewModal = ({
  isPreviewDialogOpen,
  setIsPreviewDialogOpen,
}: {
  isPreviewDialogOpen: boolean;
  setIsPreviewDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <Dialog
    isOpen={isPreviewDialogOpen}
    onClose={() => setIsPreviewDialogOpen(false)}
  >
    <div className='space-y-6'>
      <div className='space-y-2'>
        <h2 className='text-xl font-semibold text-gray-900'>Preview Access</h2>
        <p className='text-sm text-red-500'>
          This is a preview of the product. You can&apos;t interact with it.
        </p>
      </div>

      <div className='space-y-3'>
        <p className='text-sm text-gray-600'>
          Use these credentials to access the preview:
        </p>
        <div className='space-y-2 rounded-lg bg-gray-50 p-4'>
          <p className='font-mono text-sm'>
            <span className='text-gray-500'>Email: </span>
            <span className='text-gray-900'>
              abdelrahmanshaheeen8@gmail.com
            </span>
          </p>
          <p className='font-mono text-sm'>
            <span className='text-gray-500'>Password: </span>
            <span className='text-gray-900'>A10801819.com</span>
          </p>
        </div>
      </div>

      <div className='flex flex-col gap-2 pt-4'>
        <Button onClick={() => window.open('https://preview.majna.shop')}>
          Open Preview
        </Button>
        <Button
          onClick={() => setIsPreviewDialogOpen(false)}
          variant='secondary'
        >
          Close
        </Button>
      </div>
    </div>
  </Dialog>
);

export default PreviewModal;
