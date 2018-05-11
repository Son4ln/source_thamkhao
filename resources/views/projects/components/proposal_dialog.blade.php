<div id="{{ $id }}" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <!-- Modal content-->
    <div class="modal-content">
      {{-- <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">{{ $title }}</h4>
      </div> --}}
      <div class="modal-body">
        {{ $slot }}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success" id="agree">{{ $yes }}</button>
        <button type="button" class="btn btn-default" data-dismiss="modal">{{ $no }}</button>
      </div>
    </div>

  </div>
</div>
