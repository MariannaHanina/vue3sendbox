type TCAttribute = {
  Name: string;
  Value: string;
}

type TCMFAOption = {
  AttributeName: string;
  DeliveryMedium: string;
}

export type TCUser = {
  Attributes?: TCAttribute;
  Enabled?: boolean;
  MFAOptions?: TCMFAOption;
  UserCreateDate?: Date;
  UserLastModifiedDate?: Date;
  Username?: string;
  UserStatus?: 'UNCONFIRMED' | 'CONFIRMED' | 'ARCHIVED' | 'COMPROMISED' | 'UNKNOWN' | 'RESET_REQUIRED' | 'FORCE_CHANGE_PASSWORD';
}
