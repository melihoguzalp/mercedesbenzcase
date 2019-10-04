import { DoorOpenStatusDto } from './door-open-status';
import { DoorLockStatusDto } from './door-lock-status';

export class DoorsDto   {
    public doorstatusfrontleft : DoorOpenStatusDto | undefined;
    public doorstatusfrontright : DoorOpenStatusDto | undefined;
    public doorstatusrearleft : DoorOpenStatusDto | undefined;
    public doorstatusrearright : DoorOpenStatusDto | undefined;
    public doorlockstatusfrontleft : DoorLockStatusDto | undefined;
    public doorlockstatusfrontright : DoorLockStatusDto | undefined;
    public doorlockstatusrearleft : DoorLockStatusDto | undefined;
    public doorlockstatusrearright : DoorLockStatusDto | undefined;
    public doorlockstatusdecklid : DoorLockStatusDto | undefined;
    public doorlockstatusgas : DoorLockStatusDto | undefined;
    public doorlockstatusvehicle : DoorLockStatusDto | undefined;
    
}