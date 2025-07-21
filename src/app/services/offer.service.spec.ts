import { TestBed } from '@angular/core/testing';
import { OfferService } from './offer.service';

describe('OfferService', () => {
  let service: OfferService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferService);
  });

  const getVotes = (id: number) => {
    const o = service.getOfferById(id);
    return {
      up: o?.upVotes || 0,
      down: o?.downVotes || 0,
    };
  };

  const getVoteStatus = (id: number): string | null => {
    return (service as any).userVotes[id];
  };

  it('adds an upvote if not voted yet', () => {
    const id = 1;
    const { up, down } = getVotes(id);

    service.upvoteOffer(id);

    const updated = getVotes(id);
    expect(updated.up).toBe(up + 1);
    expect(updated.down).toBe(down);
    expect(getVoteStatus(id)).toBe('up');
  });

  it('removes upvote if clicked again', () => {
    const id = 2;
    const { up } = getVotes(id);

    service.upvoteOffer(id);
    expect(getVotes(id).up).toBe(up + 1);

    service.upvoteOffer(id);
    expect(getVotes(id).up).toBe(up);
    expect(getVoteStatus(id)).toBeNull();
  });

  it('adds a downvote if not voted yet', () => {
    const id = 3;
    const { down, up } = getVotes(id);

    service.downvoteOffer(id);

    const updated = getVotes(id);
    expect(updated.down).toBe(down + 1);
    expect(updated.up).toBe(up);
    expect(getVoteStatus(id)).toBe('down');
  });

  it('removes downvote if clicked again', () => {
    const id = 4;
    const { down } = getVotes(id);

    service.downvoteOffer(id);
    expect(getVotes(id).down).toBe(down + 1);

    service.downvoteOffer(id);
    expect(getVotes(id).down).toBe(down);
    expect(getVoteStatus(id)).toBeNull();
  });

  it('switches from upvote to downvote', () => {
    const id = 5;
    const { up, down } = getVotes(id);

    service.upvoteOffer(id);
    expect(getVotes(id).up).toBe(up + 1);

    service.downvoteOffer(id);
    const final = getVotes(id);
    expect(final.up).toBe(up);
    expect(final.down).toBe(down + 1);
    expect(getVoteStatus(id)).toBe('down');
  });

  it('switches from downvote to upvote', () => {
    const id = 6;
    const { up, down } = getVotes(id);

    service.downvoteOffer(id);
    expect(getVotes(id).down).toBe(down + 1);

    service.upvoteOffer(id);
    const final = getVotes(id);
    expect(final.down).toBe(down);
    expect(final.up).toBe(up + 1);
    expect(getVoteStatus(id)).toBe('up');
  });

  it('ignores invalid IDs without crashing', () => {
    const badId = 999;
    const before = service.getOffersList();

    service.upvoteOffer(badId);
    service.downvoteOffer(badId);

    const after = service.getOffersList();
    expect(after).toEqual(before);
  });
});

