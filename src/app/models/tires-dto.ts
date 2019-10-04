import { TirePressureStatusDto } from './tire-pressure-status-dto';

export class TiresDto {
    public tirepressurefrontleft : TirePressureStatusDto | undefined;
    public tirepressurefrontright : TirePressureStatusDto | undefined;
    public tirepressurerearleft : TirePressureStatusDto | undefined;
    public tirepressurerearright : TirePressureStatusDto | undefined;    
     
}